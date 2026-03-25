import "./App.css";
import { FixedSizeList as List } from "react-window";

const ListItem = ({ title }) => <div>{title}</div>;

function App() {
  const data = Array.from({ length: 40 }, (_, i) => `Item ${i}`);


  return (
    <List height={300} width={300} itemCount={data.length} itemSize={30}>
      {({ index, style }) => (
        <div style={style} key={index}>
          <ListItem title={data[index]} />
        </div>
      )}
    </List>
  );
}

export default App;
