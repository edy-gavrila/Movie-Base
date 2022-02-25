function BottomFade({ toColor }) {
  const appliedClasses = `absolute bottom-0 left-0 right-0  h-28 bg-gradient-to-b from-transparent to-slate-300`;
  // there is an  intermitent error when passing toColor dynamically to applied classes. Sometimes it fails to fade until we make a change.
  return <div className={appliedClasses}></div>;
}

export default BottomFade;
