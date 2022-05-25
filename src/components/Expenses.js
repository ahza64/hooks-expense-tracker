import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })}
    </div>
  )
}
