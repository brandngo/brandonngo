import * as React from "react";
import ExpCard from "../components/ExpCard";
import JobCard from "../components/JobCard";

const iconImgs = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://reactnative.dev/img/header_logo.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
];

const bblogo = (
  <a class="gNav-logo" aria-label="BlackBerry" tabindex="0">
    <svg
      width="175px"
      height="30px"
      viewBox="0 0 175 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>BB_White</title>
      <g
        id="Creative"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="21-product-page-Protect-02.15.22"
          transform="translate(-91.000000, -10.000000)"
          fill="#FFFFFF"
          fill-rule="nonzero"
        >
          <g id="BB_White" transform="translate(91.000000, 10.000000)">
            <path
              d="M9.18042011,2.14285967 C9.18042011,1.19318021 8.5959918,-1.17624431e-15 6.16086942,-1.17624431e-15 C5.16247216,-1.17624431e-15 2.4107723,-1.17624431e-15 2.4107723,-1.17624431e-15 L1.33931598,4.94318021 C1.33931598,4.94318021 3.36046941,4.94318021 5.25986363,4.94318021 C8.32813214,4.91883014 9.18042011,3.48214033 9.18042011,2.14285967 Z"
              id="Shape"
            ></path>
            <path
              d="M19.2861873,2.14285967 C19.2861873,1.19318021 18.701759,-1.17624431e-15 16.2666366,-1.17624431e-15 C15.2682393,-1.17624431e-15 12.5165395,-1.17624431e-15 12.5165395,-1.17624431e-15 L11.4450831,4.94318021 C11.4450831,4.94318021 13.4662366,4.94318021 15.3412807,4.94318021 C18.4338993,4.91883014 19.2861873,3.48214033 19.2861873,2.14285967 Z"
              id="Shape_1_"
            ></path>
            <path
              d="M7.84110413,9.54545936 C7.84110413,8.59578874 7.25667582,7.4025997 4.82155344,7.4025997 C3.82315617,7.4025997 1.07145632,7.4025997 1.07145632,7.4025997 L5.68518084e-15,12.3457799 C5.68518084e-15,12.3457799 2.02115343,12.3457799 3.89619757,12.3457799 C6.96445725,12.3457799 7.84110413,10.88474 7.84110413,9.54545936 Z"
              id="Shape_2_"
            ></path>
            <path
              d="M17.9468713,9.54545936 C17.9468713,8.59578874 17.362443,7.4025997 14.9273206,7.4025997 C13.9289233,7.4025997 11.1772235,7.4025997 11.1772235,7.4025997 L10.1057671,12.3457799 C10.1057671,12.3457799 12.1269206,12.3457799 14.0263148,12.3457799 C17.0702244,12.3457799 17.9468713,10.88474 17.9468713,9.54545936 Z"
              id="Shape_3_"
            ></path>
            <path
              d="M28.5153164,6.55032938 C28.5153164,5.60064992 27.930888,4.40746971 25.4957657,4.40746971 C24.4973684,4.40746971 21.7456774,4.40746971 21.7456774,4.40746971 L20.6742211,9.35064992 C20.6742211,9.35064992 22.6953745,9.35064992 24.5704186,9.35064992 C27.6386695,9.32629985 28.5153164,7.88961005 28.5153164,6.55032938 Z"
              id="Shape_4_"
            ></path>
            <path
              d="M27.0542412,14.2694801 C27.0542412,13.3198006 26.4698129,12.1266204 24.0346816,12.1266204 C23.0362844,12.1266204 20.2845934,12.1266204 20.2845934,12.1266204 L19.213137,17.0698006 C19.213137,17.0698006 21.2342905,17.0698006 23.1093346,17.0698006 C26.1775943,17.0698006 27.0542412,15.6087696 27.0542412,14.2694801 Z"
              id="Shape_5_"
            ></path>
            <path
              d="M16.4857961,17.2889601 C16.4857961,16.3392807 15.9013678,15.1461005 13.4662366,15.1461005 C12.4678393,15.1461005 9.71614827,15.1461005 9.71614827,15.1461005 L8.64469195,20.0892807 C8.64469195,20.0892807 10.6658454,20.0892807 12.5408895,20.0892807 C15.6091492,20.0649306 16.4857961,18.6282496 16.4857961,17.2889601 Z"
              id="Shape_6_"
            ></path>
            <path
              d="M83.7683052,18.75 C83.5978459,19.11526 82.7455491,20.7711005 80.6026453,20.7711005 C78.1188139,20.7711005 77.1447667,18.701291 77.1447667,17.191551 C77.1447667,14.6590813 78.8493515,12.3944712 81.3575329,12.3944712 C84.0605238,12.3944712 84.6936523,14.4155717 84.7667113,14.7808317 L88.7359591,14.7808317 C88.9794775,13.2954417 87.786262,8.74187154 81.5036422,8.74187154 C76.9012483,8.74187154 73.2242102,12.4188213 73.2242102,17.3133014 C73.2242102,21.331161 75.7323917,24.4236913 80.3834769,24.4236913 C86.1790775,24.4236913 87.7375619,19.8701212 87.9323713,18.7499912 L83.7683052,18.7499912 L83.7683052,18.75 Z"
              id="Shape_7_"
            ></path>
            <path
              d="M53.2805356,19.8457799 C53.2805356,19.6022703 53.3535858,19.1639601 53.5483953,18.2629897 C53.7432047,17.3376603 56.5435959,4.40746971 56.5435959,4.40746971 L52.8178577,4.40746971 L49.7252479,18.6769498 C49.6034887,19.2857193 49.5304385,19.87013 49.5304385,20.3814904 C49.5304385,23.4983708 51.9412108,24.4237002 53.889314,24.4237002 C54.5711514,24.4237002 55.22863,24.3019498 55.3747393,24.2775909 C55.4477895,23.961031 56.0322266,21.2824609 56.0565767,21.1607105 C55.9835265,21.1607105 55.5695487,21.2094107 55.0825295,21.2094107 C53.6945045,21.2094107 53.2805356,20.625 53.2805356,19.8457799 Z"
              id="Shape_8_"
            ></path>
            <polygon
              id="Shape_9_"
              points="106.220152 8.76623044 101.033339 8.76623044 94.3367415 14.7808405 96.6014133 4.38311963 92.8269661 4.38311963 88.5654909 24.1071403 92.3155881 24.1071403 93.3626943 19.3100606 95.6760575 17.4837696 98.8660763 24.1071403 103.054492 24.1071403 98.5251576 15.2435096"
            ></polygon>
            <path
              d="M32.7767827,18.0194801 C33.0933514,16.6071403 35.7232832,4.38311963 35.7232832,4.38311963 C35.7232832,4.38311963 40.2769681,4.38311963 42.8338497,4.38311963 C47.9963131,4.38311963 49.2625788,7.25649924 49.2625788,8.98538995 C49.2625788,12.8327903 45.6342409,13.8555199 45.1959219,13.9772703 C45.6098908,14.1233708 47.971963,15.0487002 47.971963,18.0681802 C47.971963,21.3555199 44.9524035,24.107459 40.2526181,24.107459 C40.2526181,24.107459 38.5723834,24.107459 38.1097143,24.107459 C34.1404576,24.1314904 32.0218951,21.4042201 32.7767827,18.0194801 Z M43.905306,17.7759705 C43.905306,16.8506411 43.2965277,15.681811 40.666587,15.681811 L37.2330585,15.681811 L36.2103112,20.4545406 L40.1065088,20.4545406 C42.5903401,20.4545406 43.905306,19.3100606 43.905306,17.7759705 Z M45.1715718,9.8133102 C45.1715718,8.86363075 44.4410342,8.0357105 42.6633904,8.0357105 L38.8645931,8.0357105 L38.0122963,12.0292201 L41.9815529,12.0292201 C44.0757654,12.0292201 45.1715718,10.9821403 45.1715718,9.8133102 Z"
              id="Shape_10_"
            ></path>
            <path
              d="M104.515568,18.0194801 C104.832136,16.6071403 107.462068,4.38311963 107.462068,4.38311963 C107.462068,4.38311963 112.015753,4.38311963 114.572626,4.38311963 C119.735089,4.38311963 121.001364,7.25649924 121.001364,8.98538995 C121.001364,12.8327903 117.373026,13.8555199 116.934707,13.9772703 C117.348667,14.1233708 119.710748,15.0487002 119.710748,18.0681802 C119.710748,21.3555199 116.666847,24.107459 111.991394,24.107459 C111.991394,24.107459 110.311159,24.107459 109.84849,24.107459 C105.879234,24.1314904 103.76068,21.4042201 104.515568,18.0194801 Z M115.644091,17.7759705 C115.644091,16.8506411 115.035304,15.681811 112.405372,15.681811 L108.947493,15.681811 L107.924737,20.4545406 L111.820935,20.4545406 C114.329125,20.4545406 115.644091,19.3100606 115.644091,17.7759705 Z M116.910348,9.8133102 C116.910348,8.86363075 116.17981,8.0357105 114.377825,8.0357105 L110.603378,8.0357105 L109.751081,12.0292201 L113.720347,12.0292201 C115.81455,12.0292201 116.910348,10.9821403 116.910348,9.8133102 Z"
              id="Shape_11_"
            ></path>
            <path
              d="M146.789339,8.76623044 C142.820083,8.76623044 140.092742,11.1282408 139.191745,15.5357105 C138.802126,17.4350606 137.365401,24.1071403 137.365401,24.1071403 L141.091139,24.1071403 C141.091139,24.1071403 142.454814,17.7516204 142.893133,15.75487 C143.45322,13.1493501 144.841236,12.2483796 146.69193,12.2483796 C147.300717,12.2483796 147.665986,12.3214298 147.860795,12.3457799 C147.958196,11.8100694 148.493915,9.44805023 148.615674,8.88798965 C148.226055,8.86363957 147.592918,8.76623044 146.789339,8.76623044 Z"
              id="Shape_12_"
            ></path>
            <path
              d="M159.451988,30 L171.968527,8.76623044 L167.950571,8.76623044 L162.20367,18.75 L160.864354,8.74188037 C160.864354,8.74188037 158.818851,8.74188037 156.554179,8.74188037 C151.610875,8.74188037 149.054002,11.0064904 148.153005,15.316551 C147.690327,17.4594107 146.253602,24.1071315 146.253602,24.1071315 L149.97934,24.1071315 C149.97934,24.1071315 151.343015,17.8003117 151.903085,15.2678508 C152.438822,12.8084314 154.265166,12.0535613 156.23761,12.4675303 L157.016848,8.83928067 C157.601285,12.2727209 159.378911,23.2792113 159.378911,23.2792113 L155.482714,30 L159.451988,30 L159.451988,30 Z"
              id="Shape_13_"
            ></path>
            <path
              d="M64.0437813,17.5811699 C64.871728,17.4594195 67.2581502,17.0941595 67.599069,17.0454594 C67.5260099,17.313319 67.4529597,17.7029291 67.3799095,18.0194889 C66.9415816,19.8701388 65.0665375,21.063319 62.972325,21.063319 C61.633009,21.063319 60.8537712,20.3571492 60.8537712,19.5048788 C60.8294212,18.7987002 61.4869085,17.9464298 64.0437813,17.5811699 Z M62.6314151,13.5876603 C62.7288242,13.4415598 63.6785213,11.9561699 66.0649435,11.9561699 C67.5503688,11.9561699 68.3052565,12.4918804 68.3052565,13.1493501 C68.3052565,14.0746706 66.8198312,14.3181802 64.2142406,14.6834402 C59.7579648,15.3165598 56.9332236,16.7045406 56.9332236,19.9188301 C56.9332236,22.2077903 58.8326178,24.4237002 62.193096,24.4237002 C64.9934872,24.4237002 66.4545624,22.7435096 66.5763216,22.5974003 C66.6006717,23.0113604 66.6493719,23.62013 66.6737308,24.1071403 C66.9902906,24.1071403 69.5715222,24.1071403 70.5212282,24.1071403 C70.399469,23.4496706 70.1072504,22.1590901 70.5699283,20.1136307 C70.8134379,19.0422009 71.4952754,15.9496706 71.8361941,14.24513 C72.4936815,11.0064904 70.7160376,8.74188037 66.1867116,8.74188037 C60.3424108,8.74188037 58.6621673,12.9301906 58.3943076,13.5876603 L62.6314151,13.5876603 Z"
              id="Shape_14_"
            ></path>
            <path
              d="M131.862019,19.5292201 C131.715918,19.8214298 130.814921,21.0876603 128.793759,21.0876603 C125.871617,21.0876603 125.214139,18.6038995 125.28718,17.9464298 C126.845665,17.9464298 135.831275,17.9464298 136.659213,17.9464298 C136.732272,17.6785702 136.975791,16.6558493 136.975791,15.6087696 C136.975791,12.00487 134.540668,8.71753912 129.621714,8.71753912 C125.11673,8.71753912 121.512742,12.4918892 121.512742,16.9967592 C121.512742,21.3311787 124.118324,24.423709 128.745059,24.423709 C134.443259,24.423709 135.977393,19.9675391 136.123494,19.5292289 C135.100738,19.5292201 131.862019,19.5292201 131.862019,19.5292201 Z M129.670406,12.1266204 C132.178587,12.1266204 133.128284,13.6607105 133.030884,14.8782408 C131.594159,14.8782408 127.308342,14.8782408 125.84725,14.8782408 C126.042068,14.0990295 127.235283,12.1266204 129.670406,12.1266204 Z"
              id="Shape_15_"
            ></path>
            <path
              d="M171.979978,19.5027334 C173.12535,19.5027334 174.087452,20.4108465 174.087452,21.6216668 C174.087452,22.8557689 173.10243,23.7406002 171.979978,23.7406002 C170.834615,23.7406002 169.849603,22.8324871 169.849603,21.6216668 C169.849603,20.4108465 170.834615,19.5027334 171.979978,19.5027334 Z M171.979978,19.8520043 C171.017877,19.8520043 170.26193,20.620409 170.26193,21.6216668 C170.26193,22.6462064 171.017877,23.4146111 171.979978,23.4146111 C172.942098,23.4146111 173.675125,22.6694882 173.675125,21.6216668 C173.675125,20.620409 172.919178,19.8520043 171.979978,19.8520043 Z M171.52183,22.8557689 L171.155316,22.8557689 L171.155316,20.4108465 L172.071613,20.4108465 C172.644299,20.4108465 172.919178,20.620409 172.919178,21.109397 C172.919178,21.5518126 172.644299,21.7380934 172.277768,21.7846569 L172.964991,22.8557689 L172.552655,22.8557689 L171.911246,21.7846569 L171.49891,21.7846569 L171.49891,22.8557689 L171.52183,22.8557689 Z M171.521821,21.4819585 L171.957076,21.4819585 C172.415225,21.4819585 172.552664,21.3422501 172.552664,21.0861152 C172.552664,20.8532621 172.438127,20.7135538 172.025792,20.7135538 L171.521821,20.7135538 L171.521821,21.4819585 L171.521821,21.4819585 Z"
              id="Shape_16_"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </a>
);

// add new jobs on top of the last
const jobs = [
  {
    company: "BlackBerry",
    job: "Software Developer",
    jobType: "Intern",
    month: "Sep",
    year: "2021",
    location: "Waterloo, Ontario, Canada",
    logo: bblogo,
    extras: [
      "Frontend development on cloud management application",
      "Developed custom drilldown reports and dynamic cloud onboarding forms which are used by over 1000 unique users",
      "Increased frontend performance by 130% over original solution by implementing debouncing techniques and reducing CRUD operation API calls",
      "Led a team of three frontend developers to complete large costs report component",
      "Maintained and developed code with little supervision while being the only frontend developer for onboarding forms.",
    ],
  },
];

const iconContainer = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "left",
  gap: "1vw",
};

const icon = {
  width: "60px",
  height: "60px",
};

const Experience = () => {
  return (
    <div>
      <ExpCard title="Tech Stack" color="#787878">
        <div style={iconContainer}>
          {iconImgs.map((link) => (
            <img style={icon} src={link} alt="icon" />
          ))}
        </div>
      </ExpCard>
      <ExpCard title="Employment">
        <br />
        {jobs.map((job) => (
          <JobCard data={job} />
        ))}
      </ExpCard>
    </div>
  );
};

export default Experience;
