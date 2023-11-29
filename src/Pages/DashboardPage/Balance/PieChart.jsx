
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const CustomPieChart = ({ totalUsers, totalSubscribers, totalPaidMembers }) => {
  // Calculate percentages
  const subscriberPercentage = Math.round((totalSubscribers / totalUsers) * 100);
  const paidMemberPercentage = Math.round((totalPaidMembers / totalUsers) * 100);

  const data = [
    { name: 'Subscribers', value: totalSubscribers },
    { name: 'Paid Members', value: totalPaidMembers },
  ];

  const colors = ['#FF6384', '#36A2EB']; // You can customize the colors

  return (
    <PieChart width={500} height={500} >
      <Pie
        data={data}
        cx={250}
        cy={250}
        innerRadius={80}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={({ name, percent }) => `${name} ${100 -((percent*100).toFixed(2))}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;

