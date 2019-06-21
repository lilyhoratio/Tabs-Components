
class TabLink {
  constructor(tabLink) {
    // Assign this.element to the passed in DOM element
    this.tabLink = tabLink;
    // console.log(this.tabLink); // returns html for each tabs-link 

    // Get the custom data attribute on the Link
    this.data = this.tabLink.dataset.tab; 
    // console.log(typeof this.data); // 1, 2, 3, 4 as strings

    // Using the custom data attribute get the associated Item element (using CSS selector)
    this.itemElement = document.querySelector(`.tabs-items [data-tab='${this.data}']`) //.tabs-items, not .tabs-item
    // console.log("TAB:", this.tabLink, "\n\nITEM:", this.itemElement); //checking to make sure tab1 aligns with item1, and so forth.

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    // this.tabItem.addEventListener("click", () => this.select()) // instance, meaning...tabLink
    this.tabLink.addEventListener("click", () => this.select());

  };

  select() {
    // STEP 1 - Select all classes named ".tabs-link" and assign that value to the links variable (Question - why can't you just refer to links, which was created at the bottom?)
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link") // returns .tabs-link.tabs-link-selected

    // STEP 2 - on original DOM tabLink element, removes CSS (white background styling) so that only CSS (red background styling) is in the DOMTokenList
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove("tabs-link-selected")); // returns .tabs-link
    // this.tabLink.classList.remove("tabs-link-selected")
    
    // STEP 3 - on newly created tabLink object, adds CSS (white background styling) so it looks selected
    // Add a class named "tabs-link-selected" to this link
    this.tabLink.classList.add("tabs-link-selected"); // only on element in which you click on
    
    // Call the select method on the item associated with this link
    this.tabItem.select(); 
  }
}

class TabItem {
  constructor(tabItem) {
    // Assign this.element to the passed in element
    this.tabItem = tabItem;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item")
    // console.log(items);

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove("tabs-item-selected"))
    
    // Add a class named "tabs-item-selected" to this element
    this.tabItem.classList.add("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll(".tabs-link");
links.forEach(tabLink => new TabLink(tabLink))