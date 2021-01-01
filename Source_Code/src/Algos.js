import Bfsalgorithm from "./components/bfsalgorithm/App.js"
import Dfsalgorithm from "./components/dfsalgorithm/App.js"
import Insertionsort from "./components/insertionsort/App.js"
import Bubblesort from "./components/bubblesort/App.js"
import Astaralgorithm from "./components/astaralgorithm/App.js"
import Heapsort from "./components/heapsort/App.js"
import Backtracking from "./components/backtracking/App.js"
import Dijkstraalgorithm from "./components/dijkstraalgorithm/App.js"
import Mergesort from "./components/mergesort/App.js"
import Selectionsort from "./components/selectionsort/App.js"
import Quicksort from "./components/quicksort/App.js"

const algorithms =[{
value: "bfsalgorithm",
text: "Breadth First Search",
dom: <Bfsalgorithm />
},
{
value: "dfsalgorithm",
text: "Depth First Search",
dom: <Dfsalgorithm />
},
{
value: "insertionsort",
text: "Insertion Sort",
dom: <Insertionsort />
},
{
value: "bubblesort",
text: "Bubble Sort",
dom: <Bubblesort />
},
{
value: "astaralgorithm",
text: "A* Algorithm",
dom: <Astaralgorithm />
},
{
value: "heapsort",
text: "Heap Sort",
dom: <Heapsort />
},
{
value: "backtracking",
text: "Backtracking",
dom: <Backtracking />
},
{
value: "dijkstraalgorithm",
text: "Dijkstra's Algorithm",
dom: <Dijkstraalgorithm />
},
{
value: "mergesort",
text: "Merge Sort",
dom: <Mergesort />
},
{
value: "selectionsort",
text: "Selection Sort",
dom: <Selectionsort />
},
{
value: "quicksort",
text: "Quick Sort",
dom: <Quicksort />
},
]


export default algorithms