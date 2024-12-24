/**
 * Generates an array of Date objects representing consecutive days
 * starting from a given start date.
 *
 * @param startDate - The starting date for the sequence.
 * @param numberOfDays - The number of days to generate (default is 10).
 * @returns An array of Date objects for the specified range.
 */
export function generateDaysOfWeek(
    startDate: Date,
    numberOfDays: number = 10
  ): Date[] {
    const daysArray: Date[] = [];
    const currentDate = new Date(startDate);
  
    for (let i = 0; i < numberOfDays; i++) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return daysArray;
  }
  