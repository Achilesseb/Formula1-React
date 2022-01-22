const fetchDataSucces = (data) => ({
  type: "FETCH_DATA_SUCCES",
  payload: { data },
});

export const fetchData = () => {
  return async (dispatch) => {
    const driversStandingsFetch = await fetch(
      "http://ergast.com/api/f1/current/driverStandings.json"
    );
    const constructorsStandingsFetch = await fetch(
      "http://ergast.com/api/f1/current/constructorStandings.json"
    );

    let rawData = await Promise.all([
      driversStandingsFetch,
      constructorsStandingsFetch,
    ]).then((rawData) => {
      return rawData.map((data) => {
        return data.json();
      });
    });
    let data = [];
    const driverStandingsData = await rawData[0].then(
      (response) => response.MRData.StandingsTable.StandingsLists[0]
    );
    const constructorsStandingsData = await rawData[1].then(
      (response) => response.MRData.StandingsTable.StandingsLists[0]
    );

    data.push(driverStandingsData);
    data.push(constructorsStandingsData);

    console.log(data);
    dispatch(fetchDataSucces(data));
  };
};
