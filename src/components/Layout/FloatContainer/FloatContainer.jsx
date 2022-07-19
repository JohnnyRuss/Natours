import "./styles.scss"

function FloatContainer({ children }) {
  return (
    <div className='floatContainer'>
      <div className='floatRow'>{children}</div>
    </div>
  );
}

export default FloatContainer;
