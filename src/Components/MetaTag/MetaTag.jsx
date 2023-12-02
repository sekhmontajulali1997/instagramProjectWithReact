import Helmet from "react-helmet";
const MetaTag = ({title}) => {
  return <>
<Helmet>
<title>{title}</title>
<link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" type="image/x-icon" />
</Helmet>
 
  </>;
};

export default MetaTag;
