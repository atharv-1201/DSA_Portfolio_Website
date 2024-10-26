/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Basic Data Structures",
    authors:
      "",
    conferences:
      "Dynamic Memory Allocation, Matrix Data Structures(Sparse Matrix), Arrays(1-D and 2-D), Singly Linked List, Doubly Linked List, Circular Linked List, Doubly Circular Linked List, Stack and Queue",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/dsa_1.png",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Advanced Data Structures",
    authors:
      "",
    conferences:
      "Heaps, Binary Tress, Binary Search Tress, AVL trees, B-Trees, Graphs",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/dsa_2.jpeg",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Algorithm Techniques for Efficient Data Structures and Algorithms",
    authors: "",
    conferences:
      "Time Complexity, Space Complexity, Searching, Sorting",
    researchYr: 2024,
    citebox: "popup3",
    image: "assets/images/research-page/dsa_3.jpeg",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "Memory and Space Optimization Techniques for Data Structures and Algorithms",
    authors:
      "",
    conferences:
      "Bit Manipulation, Sliding Techniques, Two-Pointer Techniques",
    researchYr: 2024,
    citebox: "popup4",
    image: "assets/images/research-page/dsa_4.png",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Leetcode",
    authors: "",
    conferences:
      " Easy Questions (5) ||  Medium Questions (16) || Hard Questions (5) || LeetCode Rank: 2,713,308",
    researchYr: 2024,
    citebox: "popup5",
    image: "assets/images/research-page/dsa_5.png", 
    citation: {
      vancouver:
       "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  {
    title: "CodeChef",
    authors: "",
    conferences:
      "⁍ C Language Online Test (93%), DSA in C++ test (83%), Java Online Test and Quiz (97%), Operating System Skill Test(100%)",
    researchYr: 2024,
    citebox: "popup6",
    image: "assets/images/research-page/dsa_6.jpeg",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 6",
    absbox: "absPopup6",
  },

  {
    title:
      "HackerRank",
    authors: "",
    conferences:
      "⁍ Gold Badge in C++ language ⁍ Gold Badge in C language ⁍ Gold Badge in Java language ⁍ Gold Badge in Python language",
    researchYr: 2024,
    citebox: "popup7",
    image: "assets/images/research-page/dsa_7.png",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "DSA-Elab: SRM Institute of Science and Technology",
    authors:
      "",
    conferences:
      "⁍ 184 / 300 questions in C, 96 / 300 questions in OOP, 85 / 300 questions in Python, 53 / 300 questions in DSA",
    researchYr: 2024,
    citebox: "popup8",
    image: "assets/images/research-page/dsa_8.png",
    citation: {
      vancouver:
        "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
