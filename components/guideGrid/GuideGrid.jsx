import styles from "./GuideGrid.module.css";

function GuideGridRow(props) {
    const levels = ["basic", "medium", "advanced"];

    const row = levels.map((level) => {
        const url = `${level}/${props.guideItem}`;
        
        if (props.exists[level]) {
            return <a href={url} className={styles.exists}></a>;
        } else {
            return <a className={styles.notExists}></a>;
        }
    });

    let displayGuideItem = props.guideItem[0].toUpperCase() + props.guideItem.slice(1);
    displayGuideItem = displayGuideItem.replace("_", " ");

    return (
        <>
          <h4>
            {displayGuideItem}
          </h4>
          {row}
        </>
    ); 
}

export default function GuideGrid(props) {
    const grid = props.links.map((guideItem) => {
        return <GuideGridRow guideItem={guideItem} exists={props.exists[guideItem]}/>;
    });

    return (
        <div className={styles.grid}>
          <div></div>
          <h3>Basic</h3>
          <h3>Medium</h3>
          <h3>Advanced</h3>
          {grid}
        </div>
    );
}

