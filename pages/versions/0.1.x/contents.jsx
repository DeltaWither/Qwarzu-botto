import GuideGrid from "../../../components/guideGrid/GuideGrid.jsx";

export default function v0_1_x_index() {
    const links = ["installing", "commands", "listeners", "schedules", "member_groups"];
    const exists = {"installing": {"basic": true, "medium": false, "advanced": false},
                    "commands": {"basic": true, "medium": true, "advanced": true},
                    "listeners": {"basic": true, "medium": true, "advanced": true},
                    "schedules": {"basic": true, "medium": true, "advanced": true},
                    "member_groups": {"basic": true, "medium": true, "advanced": true}};
    return (
        <div className="container">
          <h2>v0.1.x</h2>
          <p>This is the index for the documentation for version 0.1.x of Qwarzu Botto</p>

          <GuideGrid links={links} exists={exists}/>

          <h3>Changelog</h3>
          <a href="changelog">Changelog</a>
        </div>
    );
}
