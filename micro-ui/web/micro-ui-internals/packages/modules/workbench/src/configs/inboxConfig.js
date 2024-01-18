const inboxConfig =() => {
    return {
        label :"common inbox",
        type : 'inbox',
        apiDetails : {
            serviceName : "/individual/v1/_search",
            requestParam : {

            },
            requestBody:{
                apiOperation :"SEARCH",
                
            }

        },
        sections :{
            search :{

            },
            links :{

            },
            filter :{

            },
            searchResult : {

            }
        },
        additionalSections :{

        }
    }
}
export default inboxConfig;