# GPA Calculator

## 23rd September 2019

### **Versions of the app**

#### Version 1

Add courses without the ability to edit on the go

#### Version 2

Add courses with the ability to edit an already added course. This means that input elements would be used and new drop down list would be created everytime the add course button is clicked

### **Todo**

1. Build version 1 this morning
2. Figure out why branching isn't working

--current Progress

Tried adding the template for course additions. Would have a delete button by the side to ensure flexiblity. But then, the grid layout is interfering with the new layout.

To fix this, I would seclude the grid to just the form.
Then design a flexbox for the appended courses.

```html
<div style="visibility: visible" class="course-table">
            <div class="course-table-items">
              <p class="course-name"></p>
              <p class="course-grade"></p>
              <p class="course-credits"></p>
            </div>
            <div class="remove-course">
              &cross;
            </div>
```
