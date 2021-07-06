import Country from './Country'

const BoxWeather = (props) => {

    const{data} = props

    return (
        <div className='box'>
            <div className='title-box'>Box Weather</div>
            <div className='content-box'>
                <Country data={data}/>
            </div>
        </div>
    )
}

export default BoxWeather;