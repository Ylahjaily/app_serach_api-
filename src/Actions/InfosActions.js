export const FETCH_INFOS = "FETCH_INFOS";

const baseUrl = "https://api.insee.fr/entreprises/sirene/V3"

export const setAllInseeInfos = (infos) => {
    return {
        type : FETCH_INFOS,
        infos
    }
}

export const fetchAllInseeInfos=()=>{
    return dispatch => {
        
            let tokenAcces = "3f4a4c2f-7461-3265-87a2-907f52363cfa";

            if(tokenAcces){
                return fetch(`${baseUrl}` + '/siren',
                {
                    method : 'GET',
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization' : `Bearer ${tokenAcces}`,
                        'Access-Control-Allow-Origin' : '*'
                    }
                })
                .then(response => response.json())
                .then(data => dispatch(setAllInseeInfos(data)))
            }
        
    }
}
export default(fetchAllInseeInfos);