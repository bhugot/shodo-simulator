const sampleSalaryGrid : Map<number, number> = new Map<number, number>([
    [0, 1000],
    [1, 2000],
    [2, 3000]

   ])

it('salary from the salary grid when exist', ()=> {
    const salary =  shodoSimulator( sampleSalaryGrid, 1);
    expect(salary).toBe(2000);
})

it('salary from the salary grid when exist', ()=> {
    const salary =  shodoSimulator( sampleSalaryGrid, 0);
    expect(salary).toBe(1000);
})

it('max salary when experience exceed last', ()=> {
   
    const salary =  shodoSimulator( sampleSalaryGrid, 4);
    expect(salary).toBe(3000);
})

const salaryGrid: Map<number, number> = new Map<number, number>([
    [0,42000],
    [1,45000],
    [2,48000],
    [3,52000],
    [4,55000],
    [5,58000],
    [6,62000],
    [7,65000],
    [8,68000],
    [9,70000]
]);

const shodoSimulator = (grid: Map<number, number>, experience: number ) => {
    
    if(grid.has(experience))
        return grid.get(experience);
    return   Array.from(grid)[grid.size-1][1];
}
