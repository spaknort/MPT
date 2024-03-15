import './index.css'

interface InfoAboveExampleProps {
    isTrue: boolean | null
}

const InfoAboveExample: React.FC<InfoAboveExampleProps> = ({ isTrue }) => {
    return (
        <h4 className={"info-above-example info-above-example_" + isTrue}>{ (isTrue) ? 'Верно': 'Не верно' }</h4>
    )
}

export default InfoAboveExample