import { memo, useCallback, useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

const Intersection = () => {
  const [data, setData] = useState([]);
//   const [count, setCount] = useState(0);
const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  const limit = 10;

  const renderRow = memo(({ index, style }) => {
    return <div style={style}>{data[index]?.title ?? "Loading..."}</div>;
  });

  const callback = useCallback(({ visibleStopIndex }) => {
    if(visibleStopIndex >= data.length - 3 && !loading && hasMore){
        setPages(prev => prev + 1)
    }
  }, [data.length, loading, hasMore])

  useEffect(() => {
    if(!hasMore) return;
    setLoading(true)
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(pages-1)*limit}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(prev => [...prev,...result.posts]);

        if (result.posts.length < limit) {
          setHasMore(false);
        }
      }).finally(() => {
        setLoading(false)
      });
  }, [pages]);
  return (
    <List height={300} width={1000} itemCount={data.length} itemSize={50} onItemsRendered={callback}>
      {renderRow}
    </List>
  );
};

export default Intersection;
