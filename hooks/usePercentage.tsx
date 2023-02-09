const usePercentage = () => {
  function remainingPercentage(current: number, end: number) {
    return Math.floor(current / end * 100)
  }

  return {
    remainingPercentage
  }
}

export default usePercentage