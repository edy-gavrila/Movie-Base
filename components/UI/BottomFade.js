function BottomFade({ toColor }) {
  const appliedClasses = `absolute bottom-0 left-0 right-0  h-28 bg-gradient-to-b from-transparent to-${toColor}`;
  return <div className={appliedClasses}></div>;
}

export default BottomFade;
