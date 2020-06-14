System.register(["./index-e204cdcf.js","/src/third-party/bootstrap/js/react-bootstrap.min.js","/src/third-party/react/prop-types.development.js"],(function(exports){"use strict";var React,Container,Row,Col,Layout,PageSection,HeaderLabel,PropTypes;return{setters:[function(module){React=module.R,Container=module.C,Row=module.a,Col=module.b,Layout=module.L,PageSection=module.P,HeaderLabel=module.H},function(){},function(module){PropTypes=module.default}],execute:function(){exports("default",TestimonialsPage);var css_testimonialCardCon="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__testimonialCardCon__8ie",css_darkerShade="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__darkerShade__8ie",css_pictureCon="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__pictureCon__8ie",css_photo="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__photo__8ie",css_txt="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__txt__8ie",css_clientName="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__clientName__8ie",css_clientTitle="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__clientTitle__8ie",css_testimonialText="TestimonialCard_choloeee7a28cc46c24a173be950b05d4c711_nk8__testimonialText__8ie";function TestimonialCard(props){return React.createElement("div",{className:`${css_testimonialCardCon} \n                my-5 \n                py-5 \n                ${"right"===props.photoPosition?css_darkerShade:""}`},React.createElement(Container,null,React.createElement(Row,null,React.createElement(Col,{md:{span:3,order:"right"===props.photoPosition?"last":"first"},className:"px-0"},React.createElement("picture",{className:css_pictureCon+" mx-auto"},React.createElement("img",{className:css_photo,src:props.photo}))),React.createElement(Col,{md:9,className:"px-0"},React.createElement("div",{className:`${css_txt} my-1 h-100 ${"right"===props.photoPosition?"text-right":"text-left"}`},React.createElement("div",{className:css_clientName},props.clientName),React.createElement("sub",{className:css_clientTitle},props.clientTitle),React.createElement("p",{className:css_testimonialText},props.children))))))}function TestimonialsPage(props){return React.createElement(Layout,null,React.createElement(PageSection,{id:"testimonials-page"},React.createElement(HeaderLabel,null,"Client Testimonials"),React.createElement(Container,null,React.createElement(Row,null,React.createElement(Col,null),React.createElement(Col,{xs:10},React.createElement(TestimonialCard,{photo:"/images/testimonials/sample1.png",clientName:"Jack Doe",clientTitle:"CEO",photoPosition:"left"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus."),React.createElement(TestimonialCard,{photo:"/images/testimonials/sample2.png",clientName:"Mary Doe",clientTitle:"Web Developer",photoPosition:"right"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante."),React.createElement(TestimonialCard,{photo:"/images/testimonials/sample3.png",clientName:"Jane Doe",clientTitle:"Product Engineer",photoPosition:"left"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper."),React.createElement(TestimonialCard,{photo:"/images/testimonials/sample4.png",clientName:"Andy Doess",clientTitle:"Music Producer",photoPosition:"right"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus."),React.createElement(TestimonialCard,{photo:"/images/testimonials/sample5.png",clientName:"Arthur Mike",clientTitle:"Lawyer",photoPosition:"left"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus."),React.createElement(TestimonialCard,{photo:"/images/testimonials/sample6.png",clientName:"Peter Mone",clientTitle:"Customer Relations Supervisor",photoPosition:"right"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus..")),React.createElement(Col,null)))))}TestimonialCard.propTypes={photo:PropTypes.string.isRequired,photoPosition:PropTypes.string.isRequired,clientName:PropTypes.string.isRequired,clientTitle:PropTypes.string.isRequired,children:PropTypes.node},TestimonialsPage.propTypes={}}}}));
//# sourceMappingURL=TestimonialsPage-d85089fb.js.map
