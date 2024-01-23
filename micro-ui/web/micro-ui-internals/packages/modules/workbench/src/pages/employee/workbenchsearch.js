import {
  Header,
  InboxSearchComposer
} from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
//import searchConfigMUKTA from "../../configs/ExampleConfig";

export const searchconfig = () => 
{
  return {
    label: "Individual Search",
    type: "search",
    apiDetails: {
      serviceName: "/individual/v1/_search",
      requestParam: {},
      requestBody: {
        apiOperation: "SEARCH",
        Individual: {},
      },
      masterName: "commonUiConfig",
      moduleName: "SearchIndividualConfig",
      minParametersForSearchForm: 1,
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.Individual",
      searchFormJsonPath: "requestBody.Individual",
    },
    sections: {
      search: {
        uiConfig: {
          headerStyle: null,
          formClassName: "custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 1,
          defaultValues :{
            individualName : "",
            mobileNumber :"",
            individualId :"",

          },
          fields: [
            {

              label: "Applicant name ",
              isMandatory: false,
              key: "BrSelectFather",
              type: "text",
              disable: false,
              populators: { 
                name: "individualName", 
                error: "Required", 
                validation: { pattern: /^[A-Za-z]+$/i } 
              },
            },
            {
              label: "Phone number",
              isMandatory: true,
              key: "BrSelectFather",
              type: "number",
              disable: false,
              populators: { name: "mobileNumber", error: "sample error message", validation: { min: 0, max: 99999} },
            },
            
            {
              label: "Individual Id ",
              isMandatory: false,
              key: "BrSelectFather",
              type: "text",
              disable: false,
              populators: { 
                name: "individualId",
              },
            },
          ],
        },
        label: "",
        children: {},
        show: true
      },
      searchResult: {
        tenantId: "pg.citya",
        label: "",
        uiConfig: {
          columns: [
            {
              label: "Individual ID",
              jsonPath: "individualId"
            },
            {
              label: "Name",
              jsonPath: "name.givenName"
            },
            {
              label: "Address",
              jsonPath: "address", // Assuming you want the first address
              // additionalCustomization: (data) => {
              //   // Customize the address format here
              //   const addressData = data && data.address && data.address[0];
              //   if (addressData) {
              //     const { doorNo, street, locality, city, pincode } = addressData;
              //     return `${doorNo}, ${street}, ${locality}, ${city}, ${pincode}`;
              //   }
              //  // return "NA";
              // }
              "additionalCustomization": true
            },
            // Add more columns as needed
          ],
          enableGlobalSearch: false,
          enableColumnSort: true,
          resultsJsonPath: "Individual" // This is the key where the array of individual data is located
        },
        children: {},
        show: true,
      },
      
      additionalSections: {},
    },
  };
};

const SearchIndividual = () => {
  const { t } = useTranslation();
  const tenant = Digit.ULBService.getStateId();
  const indConfigs = searchconfig();

  // let configs = useMemo(
  //   () => Digit.Utils.preProcessMDMSConfigInboxSearch(t, indConfigs, "sections.search.uiConfig.fields",{
  //   }
  //   ),[indConfigs]);
  
  return (
    <React.Fragment>
      <Header styles={{ fontSize: "32px" }}>{t(indConfigs?.label)}</Header> 
      <div className="inbox-search-wrapper">
        <InboxSearchComposer configs={indConfigs}></InboxSearchComposer>
      </div>
    </React.Fragment>
  );
};
export default SearchIndividual;