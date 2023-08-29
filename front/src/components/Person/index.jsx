import styles from './person.module.css';

function Person(props){
    return(
        <div className={styles.person}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={styles.person_name}>
                {props.name}
            </div>
        </div>
    );
};

export default Person;