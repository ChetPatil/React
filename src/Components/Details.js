
const Details = (props) => {
    return(
        <div className="margin-left">
            
            <table>
                <tr className="chBac">
                    <td>Name</td>
                    <td>Move In Date</td>
                    <td>Rent</td>
                    <td>Deposit</td>
                    <td>Status </td>
                </tr>
                <tr>
                <td>Chetan </td>
                    <td>12/1/2020</td>
                    <td>$9876</td>
                    <td>$102934</td>
                    <td>Pending &nbsp;&emsp; </td>
                    <td className={`${props.yl}`}>  </td>
                </tr>
                <tr>
                    <td>Sagar </td>
                    <td>01/12/2019</td>
                    <td>$9999</td>
                    <td>$200090</td>
                    <td>Paid&nbsp;&emsp; </td>
                    <td className={`${props.gr}`}>  </td>
                </tr>
            </table>
            <button>Submitted</button>
        </div>
    )
}
export default Details;