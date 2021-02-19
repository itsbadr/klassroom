import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ showing, top, left }) {

    /* 
    
    const [position, setPositions] = useState([])
    const [showing, setShowing] = useState(false)

    function openContext(event) {
        console.log("test")
        setShowing(prevState => !prevState)
        setPositions([event.screenX - window.screenX, event.screenY - 150])
    }
    
    */

    return (
        <div style={{ display: showing ? "flex" : "none", top, left }} className={styles.contextContainer}>
            <div>
                <h5>First Option</h5>
            </div>
            <div>
                <h5>Second Option</h5>
            </div>
            <div>
                <h5>Third Option</h5>
            </div>
            <div>
                <h5>Fourth Option</h5>
            </div>
        </div>
    )

}