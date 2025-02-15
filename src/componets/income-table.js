import "@/assets/styles.css";
import Data from "@/utils/balance.json";

export default function IncomeTable(){
    return(
        <>
            <h1>Latest transactions</h1>
            <table>
                {Object.keys(Data.balance).map((date, index) => (
                <tbody key={index}>
                     <tr className="day">
                         <td colSpan={3}>{date}</td>
                     </tr>
                     {Data.balance[date].map((company, index) => (
                        <tr key={index}>
                            <td>
                                <img src={company.image}/>
                            </td>
                            <td>
                                <p>{company.company}</p>
                                <p className="gray-text">{company.createdAt}</p>
                            </td>
                            <td className="number-alignment">
                                <p className={` ${company.amount.indexOf("-") === -1 ? "green-text" : null}`}>{company.amount.indexOf("-") === -1 ? "+"+ company.amount: company.amount}</p>
                                <p className="gray-text">{company.details}</p>
                            </td>
                        </tr>
                     ))}
                </tbody>
                ))}
            </table>
        </>
    )
}