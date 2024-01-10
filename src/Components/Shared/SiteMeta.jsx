import { Helmet } from "react-helmet-async";

const SiteMeta = ({ siteTitle, tagLine }) => {
    return (
        <div>
            <Helmet>
                <title className="capitalize">{siteTitle ? siteTitle : "Restho"} {tagLine ? `|`:''} {tagLine ? tagLine : ''}</title>
            </Helmet>
        </div>

    );
};

export default SiteMeta;