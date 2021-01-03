import Dfsalgorithm from "./components/dfsalgorithm/App.js"
import Mergesort from "./components/mergesort/App.js"
import Quicksort from "./components/quicksort/App.js"
import Backtracking from "./components/backtracking/App.js"
import Towerofhanoi from "./components/towerofhanoi/App.js"
import Dijkstraalgorithm from "./components/dijkstraalgorithm/App.js"
import Bubblesort from "./components/bubblesort/App.js"
import Insertionsort from "./components/insertionsort/App.js"
import Bfsalgorithm from "./components/bfsalgorithm/App.js"
import Selectionsort from "./components/selectionsort/App.js"
import Heapsort from "./components/heapsort/App.js"
import Astaralgorithm from "./components/astaralgorithm/App.js"

const algorithms =[{
value: "dfsalgorithm",
text: "Depth First Search",
dom: <Dfsalgorithm />
},
{
value: "mergesort",
text: "Merge Sort",
dom: <Mergesort />
},
{
value: "quicksort",
text: "Quick Sort",
dom: <Quicksort />
},
{
value: "backtracking",
text: "Backtracking",
dom: <Backtracking />
},
{
value: "towerofhanoi",
text: "Tower Of Hanoi",
dom: <Towerofhanoi />
},
{
value: "dijkstraalgorithm",
text: "Dijkstra's Algorithm",
dom: <Dijkstraalgorithm />
},
{
value: "bubblesort",
text: "Bubble Sort",
dom: <Bubblesort />
},
{
value: "insertionsort",
text: "Insertion Sort",
dom: <Insertionsort />
},
{
value: "bfsalgorithm",
text: "Breadth First Search",
dom: <Bfsalgorithm />
},
{
value: "selectionsort",
text: "Selection Sort",
dom: <Selectionsort />
},
{
value: "heapsort",
text: "Heap Sort",
dom: <Heapsort />
},
{
value: "astaralgorithm",
text: "A* Algorithm",
dom: <Astaralgorithm />
},
]


export default algorithms