import TextChannels from '../../components/TextChannels';
import VoiceChannels from '../../components/VoiceChannels';
import styles from './leftSidebar.module.css';

function LeftSidebar(){
    return(
        <div className={styles.left_sidebar}>
            <TextChannels/>
            <VoiceChannels/>
        </div>
    );
};

export default LeftSidebar;