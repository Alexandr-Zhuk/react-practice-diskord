import styles from './translation.module.css';

function Traslation(props){
    return(
        <div className={styles.translation}>
            {props.trans ? <div>Іде трансляція</div> : <img src={props.avatar} alt="" />}
            
        </div>
    );
};

export default Traslation;