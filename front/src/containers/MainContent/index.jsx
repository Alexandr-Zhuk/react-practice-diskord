import styles from './mainContent.module.css';
import Traslation from '../../components/Translation';
import axios from 'axios';
import {useState, useEffect} from 'react';

function MainContent(){

    const [people, setPeople] = useState([]);
    const getPeople = async() => {
        const result = await axios.get('http://localhost:3001/main/people');
        setPeople(result.data);
    }

    useEffect(()=> {
        getPeople();
    }, [])

    return(
        <div className={styles.main_content}>
            {people.map(item => <Traslation trans={item.isTranslation} avatar={item.avatar} />
                
               
            )}
            
        </div>
    );
};

export default MainContent;