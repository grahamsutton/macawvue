<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item href="#item-1">File Naming</b-list-group-item>
            <b-list-group-item href="#item-2">Directory Naming</b-list-group-item>
            <b-list-group-item href="#item-3">JS Version</b-list-group-item>
            <b-list-group-item href="#item-4">JS Coding Standards</b-list-group-item>
            <b-list-group-item href="#item-5">Vue Version</b-list-group-item>
            <b-list-group-item href="#item-6">Vue Coding Standards</b-list-group-item>
            <b-list-group-item href="#item-7">Directory Organization</b-list-group-item>
            <b-list-group-item href="#item-8">Vue Files</b-list-group-item>
            <b-list-group-item href="#item-9">Presentational Components</b-list-group-item>
          </b-list-group>
          </form>
        </div>
      </div>
      <!-- / inner navigation -->
      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">

          <!-- Title Container-->
          <div class="col-12 col-lg-10 titles-ct mt-0">
            <h1>Naming Conventions</h1>
            <h2>In order to maintain common and best practices across the department, we have decided to standardize on using specific practices and implementations for JavaScript and Vue.</h2>
          </div>

          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div> 

          <!-- Page description text -->   
          <div class="col-12">
            <h3 id="item-1">File Naming</h3>
            <p>JavaScript and Vue component file names should be written in StudlyCaps, where each word begins and is separated by a capital letter with no spaces or underscores between each word.</p> 

            <div class="example-code good">
<div class="example-header">Good:</div>
<pre><code>Vue file (.vue):    MyNewComponent.vue
JavaScript file (.js):  MyNewFile.js</code></pre>
  </div>
          <div class="example-code bad">
<div class="example-header">Bad:</div>
<pre><code>Vue file (.vue):    myNewComponent.vue
JavaScript file (.js):  my_new_file.js</code></pre>
</div>

        <h3 id="item-2">Directory Naming</h3>
        <p>When creating new directories, they should be lowercase and preferably only one word long, however, if multiple words are needed, they should be separated with underscore “_” characters. Dashes “-”, and white spaces “ “ are not acceptable. Directory names should follow a clear and “possessive” path, meaning that each successive directory should “belong” to the directory before it. Directory names should also be clear and concise.</p>
<div class="example-code good">
<div class="example-header">Good:</div>
<pre><code>website/resources/js/scripts/member/order_types/MyNewFile.js</code></pre>
  </div>
          <div class="example-code bad">
<div class="example-header">Bad:</div>
<pre><code>website/resources/js/scripts/mem/orderTypes-stuff/MyNewFile.js</code></pre>
</div>

          <h3 id="item-3">JavaScript Version</h3>
          <p>We use JavaScript ES6, which is the latest stable version of the ECMAScript standard which supports the use of module import/export, arrow functions, constants (“const” keyword), “let” keyword, and a variety of other features. You are not forced to use ES6 syntax since the transpiler will interpret regular JavaScript with no issues whatsoever, however, we encourage that you try to leverage the power that some of the features of the new syntax offer so that you can write more concise code.</p>

          <h3 id="item-4">JavaScript Coding Standards</h3>
          <p>Our JavaScript standards follow Airbnb’s Official JavaScript Style Guide. This is the most popular JavaScript Style Guide for modern JavaScript and contains many good examples and descriptions of why certain practices are good and what they are bad. It it extremely important that you take the time to read this.</p>

          <h3 id="item-5">Vue Version</h3>
          <p>We use Vue.js 2.0 which is the latest major available version of Vue. Click on this link to watch a short video about the basics of Vue.</p>

          <h3 id="item-6">Vue Coding Standards</h3>
          <p>Our Vue coding standards follow the guidelines of the Official Vue Style Guide. Please make sure to read this documentation as it very important to understanding best practices and avoiding pitfalls when working with Vue. Knowing these standards can save you lots of headaches in the future.</p>

          <h3 id="item-7">Directory Organization</h3>
          <p>All Vue and JavaScript files should be created under the directory website/resources/js/. The directory structure is as follows:</p>
<pre><code>├─app.sproutloud.com/
  │ └─website/
+ │   └─resources/
+ |     └─js/
+ |       ├─src/
+ |         ├─components/
+ |           ├─elements/
+ |           └─modules/
+ |         └─scripts/
+ |       └─tests/
+ |         ├─components/
+ |         └─scripts/</code></pre>

          <p>Throughout the rest of this document, any diagrams or models that contain green text will imply new additions and red text will imply removal, just like it does in git. This document will also use <span class="highlight">highlighting</span> to point out something you should focus on.</p>

          <p>Each directory in the new directory structure is intended to hold specific types of files.</p>
<pre><code>├─app.sproutloud.com/
│ └─website/
│   └─resources/
|     └─js/
|       ├─src/
|         ├─components/    <- Vue (.vue) components go here
|           ├─elements/    <- “presentational” Vue components
|           └─modules/     <- “data-driven” Vue components
|         └─scripts/       <- JavaScript (.js) files go here 
|       └─tests/
|         ├─components/    <- Vue (.vue) components tests go here
|         └─scripts/       <- JavaScript (.js) tests go here</code></pre>

<table class="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <td><strong>Directory</strong></td>
      <td><strong>Description</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>website/resources/js/src/components</td>
      <td>This directory should only contain Vue components. Files in here should end with a (.vue) extension. Some exceptions can be made for storing associated JS (.js) files in.</td>
    </tr>
    <tr>
      <td>website/resources/js/src/components/elements/</td>
      <td>This directory should only contain components that are meant for displaying data, not managing it. (Components without AJAX calls)</td>
    </tr>
    <tr>
      <td>website/resources/js/src/components/modules/</td>
      <td>This directory should only contain components that manage business data (fetching, passing, retrieving data). These components pass data to presentational components.</td>
    </tr>
    <tr>
      <td>website/resources/js/src/scripts</td>
      <td>This directory should only contain JavaScript files that should be used like libraries or class objects.</td>
    </tr>
    <tr>
      <td>website/resources/js/tests</td>
      <td>This directory should contain all unit tests for JavaScript and Vue components.</td>
    </tr>
    <tr>
      <td>website/resources/js/src/tests/components/</td>
      <td>This directory should contain unit tests for Vue components only.</td>
    </tr>
    <tr>
      <td>website/resources/js/src/tests/scripts/</td>
      <td>This directory should contain unit tests for JavaScript files only.</td>
    </tr>
  </tbody>
</table>

<h3 id="item-8">Vue Files (.vue)</h3>
<p>One Vue file represents one component. This file contains all the HTML, CSS, and JS necessary for that one Vue component to work. This file is known as a single-file component. These files end with the file extension .vue.</p>

<h3>Creating New Vue Files/Components</h3>
<p>A Vue file contains three sections that can defined with markup tags:</p>
<ul>
  <li>&lsaquo;template&rsaquo; - Contains the HTML of the component.</li>
  <li>&lsaquo;script&rsaquo;   - Contains the JavaScript that powers the component.</li>
  <li>&lsaquo;style&rsaquo;    - Contains CSS styling that applies only to the component.</li>
</ul>

<p>Not every section is required. For example, if your component does not need any styling, you can omit the &lsaquo;style&rsaquo; tag, but you should always have at least &lsaquo;template&rsaquo; and &lsaquo;script&rsaquo; tags in your file.</p>

<p>Vue files should be created under the directory website/resources/js/components/.</p>
<pre><code>├─app.sproutloud.com/
  │ └─website/
  │   └─resources/
  |     └─js/
  |       ├─src/
  |         ├─components/
  |         └─scripts/
  |       └─tests/
  |         ├─components/
  |         └─scripts/</code></pre>

<p>Here is a sample of the basic structure of a new Vue file that you should start every Vue file with (again, &lsaquo;style&rsaquo; is optional if not needed, but if needed, please speak with your UI team member if you need styling beyond simple “show and hide” classes):</p>

<p>If the &lsaquo;style&rsaquo; tag is used in a Vue Component, it must be succeeded by the “scoped” attribute. This “scoped” attribute will force the CSS to only apply to the markup within the component.  For example, you could target the “button” element in CSS directly (no class names or ids) and if it is in the “scoped” attribute, it will only apply styling to any &lsaquo;button&rsaquo; elements within the component and not to &lsaquo;button&rsaquo; elements around the app. Omitting the “scoped” attribute will affect all &lsaquo;button&rsaquo; elements in the app.</p>

<h3 id="item-9">Presentational vs Data-Driven Components</h3>
<p>In Vue, there is a concept of “data-driven” and “presentational” components, often also referred to as “parent” and “child” components respectively. This is an important concept to understand in Vue, as it the underlying principle that helps keep code DRY (Don’t Repeat Yourself) and reusable.</p>

<h4>Presentational (Child) Components</h4>
<p>Presentational components should “present” data only. They should not fetch data internally, but rather, have their data passed to them via “props” for display. Their only goal is to display the data you give it. Adding logic in here will prevent the component from being reusable since you inject logic specific for only one use case.</p>

<p>If you need to retrieve data from a presentational component, they can also be programmed to “emit” data, which essentially is an event on the component that you can create to broadcast data to a parent component without causing a dependency. Read more about that here.</p>

<p>These types of components will be listed under the directory website/resources/js/src/components/elements/</p>
<pre><code>
 ├─app.sproutloud.com/
 │ └─website/
 │   └─resources/
 |     └─js/
 |       ├─src/
 |         ├─components/
 |           ├─elements/
 |           └─modules/
 |         └─scripts/
 |       └─tests/
 |         ├─components/
 |         └─scripts/
</code></pre>

          <p>If we identify that there are presentational components containing business logic, you will be asked to abstract it into a data (parent) component. Anyone performing code reviews should be actively seeking out these types of mistakes.</p>

          <p>Examples of presentational components could include things like:</p>
          <ul>
            <li>Input fields</li>
            <li>Panels</li>
            <li>Alert messages, etc</li>
            <li>Data-Driven (Parent) Components</li>
            <li>Data components should be responsible for managing application-specific logic and passing down relevant data to presentational (child) components. These types of components can render markup, but that markup but should very application specific and usually be very limited in its reuse.</li>
           </ul>

            <p>For example, a form component would be a good example of a data (parent) component since typically forms usually manage the sending and receiving of data and are usually geared to one specific business use. In some cases, a form could be reused in a few other places, but does not happen very often. Typically input fields vary from form to form depending on the business use case. However, the input fields, like datepickers, text inputs, text areas, and so on, can be reused in many forms. A form in this case would pass data to the input fields to render and emit data back to itself. In the form component, you would also manage things like form submission and responses from form submissions, etc.</p>
            <p>Examples of data components could include things like:</p>
            <ul>
              <li>Any component that needs to make an AJAX call</li>
              <li>When Should I Create a New Component?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>