import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })}
    </Card>
  )
}
