// import { AddFilled, Button, Header, InboxSearchComposer, Loader, Dropdown,Toast,WorkflowModal,ActionBar,SubmitBar } from "@egovernments/digit-ui-react-components";
// import React, { useState, useEffect, useMemo } from "react";
// import { useTranslation } from "react-i18next";
// import { useHistory, useParams } from "react-router-dom";
// import _, { drop } from "lodash";
// i//mport { Config } from "../../configs/LocalisationSearchConfig";
// import getEditModalConfig from "../../configs/EditModalConfig";
// import { useQueryClient } from "react-query";

// const searchconfig = () => {
//   return{
//     label : "search",
//     type :'search',
//     apiDetails :{
//       serviceName : "/individual/v1/_search",
//       requestParam :{

//       },

//     },
//     sections:{
//       search :{
//         uiConfig: {
            
//             headerStyle : null,
//             primaryLabel: "Action_search",
//             secondaryLabel : "clear_search_link",
//             minReqFields: 1,
//             defaultValues: {
//               id: "",
//               individual name: [],
//               mobilenumber: [],
//             },
//             fields: [
//                 {
//                   label: "Name of Applicant",
//                   type: "text",
//                   isMandatory: true,
//                   disable: false,
//                   populators: {
//                     name: "name",
//                     error: 'enter valid name',
//                     validation :{minlength :2}
//                 }
//                   }
//                   {
//                     label: "ApplicantID",
//                     type: "numbaer",
//                     isMandatory: false,
//                     disable: false,
//                     populators: {
//                       name: "id"}
//                     }
//                     {
//                         label: "mobilenumber",
//                         type: "numbaer",
//                         isMandatory: false,
//                         disable: false,
//                         populators: {
//                           name: "mobno"}
//                         }
//                 ],
//       },
//       searchResult : {

//       },
//     },
//     additionalSections :{}
//   }
// }
// }

// export default searchconfig;