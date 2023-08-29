import styles from './voiceChannels.module.css';
import OneVoice from '../OneVoice';

function VoiceChannels(){
    return(
        <div className={styles.voice_channels}>
            <h3>Голосові канали</h3>
            <OneVoice name="Основний" />
        </div>
    );
};

export default VoiceChannels;