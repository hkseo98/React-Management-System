
export default function Customer({data}) {
    return(
        <div>
            <CustomerProfile data={data}></CustomerProfile>
            <CustomerInfo data={data}></CustomerInfo>
        </div>
    )
}

function CustomerProfile({data}) {
    return(
        <div>
            <img src={data.im} alt="profile"/>
            <h2>{data.name}({data.id})</h2>
        </div>
    )
}

function CustomerInfo({data}) {
    return(
        <div>
            <p>{data.birth}</p>
            <p>{data.gender}</p>
            <p>{data.job}</p>
        </div>
    )
}