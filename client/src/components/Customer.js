import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Customer({data}) {
    return(
        <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell><img src={data.image} alt="profile"></img></TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.birth}</TableCell>
            <TableCell>{data.sex}</TableCell>
            <TableCell>{data.job}</TableCell>
        </TableRow>
    )
}

// function CustomerProfile({data}) {
//     return(
//         <div>
//             <img src={data.image} alt="profile"/>
//             <h2>{data.name}({data.id})</h2>
//         </div>
//     )
// }

// function CustomerInfo({data}) {
//     return(
//         <div>
//             <p>{data.birth}</p>
//             <p>{data.gender}</p>
//             <p>{data.job}</p>
//         </div>
//     )
// }