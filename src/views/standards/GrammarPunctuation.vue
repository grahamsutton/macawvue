<template>
  <dashboard>
    <div class="row">
      <!-- inner navigation -->
      <div class="col order-md-2 col-lg-4 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <form>
            <div class="form-group m-0">
              <div class="dropdown p-2">
                  <b-dropdown v-b-scrollspy:nav-scroller id="dropdownMenuButton" data-toggle="dropdown" text="Dropdown Button" class="m-md-2">
                  <b-dropdown-item @click="scrollIntoView" href="#item-1">Active voice</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-2">Buttons</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-3">Capitalization</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-4">Character Count</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-5">Checkboxes</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-6">Contractions</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-7">Currency</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-8">Dates</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-9">Decimals</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-10">Drop-down menus</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-11">Emoji</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-12">Headings and subheadings</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-13">Links</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-14">Lists</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-15">Percentages</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-16">Pronouns</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-17">Punctuation</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-18">File extensions</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-19">Radio Buttons</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-20">Ranges and spans</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-21">Slang and jargon</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-22">Telephone numbers</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-23">Text formatting</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-24">Time</b-dropdown-item>
                  <b-dropdown-item @click="scrollIntoView" href="#item-25">Tooltips</b-dropdown-item>
                </b-dropdown>
                
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- / inner navigation -->
      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-7 offset-lg-1 py-5" id="nav-scroller" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">
          <!-- Title Container-->
          <div class="col-12 col-lg-10 titles-ct mt-0">
            <h1>Grammar &amp; Punctuation</h1>
            <h2>Adhering to certain rules of grammar and mechanics helps us keep our writing clear and consistent.</h2>
          </div>
          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div>
          <!-- Page description text -->
          <div class="col-12 text-justify">
            <p></p>
          </div>
          <!-- / Page description text -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-0">
            <hr>
            <h2>Abbreviations and acronyms</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              We won’t know what abbreviations our users know and what they won’t. We also can’t be sure they saw a specific page in which we spell this out. We handle this depending on the space available. Most of the time, our information is organized in columns, where space is limited. In this case, we add a tooltip to show the full name to avoid confusion.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Exceptions. Not requiring additional explanation.</p>
              <ul>
                <li>Ref ID</li>
                <li>Item #</li>
                <li>API</li>
                <li>HTML</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-1">
            <hr>
            <h2>Active voice</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use active voice. Avoid passive voice.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>In active voice, the subject of the sentence does the action. In passive voice, the subject of the sentence has the action done to it.</p>
              <ul>
                <li>Jane logged into the account.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-2">
            <hr>
            <h2>Buttons</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Buttons should always contain actions. The language should be clear and concise. Capitalize every word, except articles. It’s OK to use an ampersand in button copy.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Standard website buttons include</p>
              <ul>
                <li>Submit</li>
                <li>Add to Cart</li>
                <li>Cancel</li>
                <li>Go Back</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-3">
            <hr>
            <h2>Capitalization</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              When writing out an email address or website URL, use all lowercase. Don't capitalize random words in the middle of sentences.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Here are some words that we never capitalize in a sentence.</p>
              <ul>
                <li>website</li>
                <li>internet</li>
                <li>online</li>
                <li>email</li>
                <li>freddie@sproutloud.com</li>
                <li>sproutloud.com</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-4">
            <hr>
            <h2>Character Count</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              While we are tempted to have a bunch of letters to test functionality in our app, we limit any word to 40 characters. Realistically, 99.99% of words are less characters than that.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-5">
            <hr>
            <h2>Checkboxes</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use sentence case for checkboxes. Ensure that the checkbox as well as the label are clickable to facilitate the check.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-6">
            <hr>
            <h2>Contractions</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              They're great! They give our writing an informal, friendly tone. In most cases, use them as you see fit. Avoid them if you're writing content that will be translated for an international audience.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-7">
            <hr>
            <h2>Currency</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              When writing about currency, use the currency sign ($) before the amount. Include a decimal and number of cents if more than 0. Amounts over 3 digits get commas.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Examples</p>
              <ul>
                <li>$1,000.34</li>
                <li>¥15,000.00</li>
                <li>€100.00</li>
                <li>You have $15.00 remaining from this fund. Use this fund for any order.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-8">
            <hr>
            <h2>Dates</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Most of our dates are shown in the context of tabular data. In that case, we show it as MM/DD/YYYY. If displaying a date outside of a table, spell out the day of the week and the month. Abbreviate only if space is an issue in the app.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Examples</p>
              <ul>
                <li>10/05/2018</li>
                <li>02/07/2018</li>
                <li>Saturday, January 24</li>
                <li>Sat., Jan. 24</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-9">
            <hr>
            <h2>Decimals</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              The application should always display the amount of decimal digits based on the ISO 4217, but since currently all the supported currencies are using 2 decimals most of the app is hard-coded to 2 decimals.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Examples</p>
              <ul>
                <li>10.2534</li>
                <li>10.25</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-10">
            <hr>
            <h2>Drop-down menus</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use sentence case for menu items.
            </div>
            <!-- Bulleted List -->
            <div>
              <p></p>
              <ul>
                <li>The order for drop-down menus should be alphabetical, since menus can grow and this is the natural sorting expected by clients.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-11">
            <hr>
            <h2>Emoji</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              We don’t use these. :(
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-12">
            <hr>
            <h2>Headings and subheadings</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use title case, unless the heading is a punctuated sentence. If the heading is a punctuated sentence, use sentence case. Use sentence case for subheadings regardless of end punctuation.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-13">
            <hr>
            <h2>Links</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Don’t include preceding articles (a, an, the, our) when you link text.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Examples</p>
              <ul>
                <li>If a link comes at the end of a sentence or before a comma, don’t link the punctuation mark.</li>
                <li>Read the [automation guide] for details.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-14">
            <hr>
            <h2>Lists</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use lists to present steps, groups, or sets of information. Give context for the list with a brief introduction. Number lists when the order is important, like when you’re describing steps of a process.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Guidelines</p>
              <ul>
                <li>Number lists when the order is important, like when you’re describing steps of a process.</li>
                <li>Don't use numbers when the list's order doesn't matter.</li>
                <li>If one of the list items is a complete sentence, use proper punctuation and capitalization on all of the items.</li>
                <li>If list items are not complete sentences, don’t use punctuation, but do capitalize the first word of each item.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-15">
            <hr>
            <h2>Percentages</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use the % symbol instead of spelling out "percent"
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Example</p>
              <ul>
                <li>This fund gives you 100.00% off. Use this fund for Direct Mail, Email.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-16">
            <hr>
            <h2>Pronouns</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              We don't use pronouns that often in the app, but if your subject's gender is unknown or irrelevant, use 'they,' 'them,' and 'their' as a singular pronoun. Don't use 'one' as a pronoun.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-17">
            <hr>
            <h2>Punctuation</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Follow these guidelines when contemplating punctuation.
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Examples</p>
              <ul>
                <li>Use exclamation points sparingly, and never more than one at a time. They’re like high-fives: A well-timed one is great, but too many can be annoying.</li>
                <li>Question marks go inside quotation marks if they’re part of the quote. Like periods, they go outside parentheses when the parenthetical is part of a larger sentence, and inside parentheses when the parenthetical stands alone.</li>
                <li>Periods and commas go within quotation marks. Question marks within quotes follow logic—if the question mark is part of the quotation, it goes within. If you’re asking a question that ends with a quote, it goes outside the quote.</li>
                <li>Go easy on semicolons. They usually support long, complicated sentences that could easily be simplified. Try an em dash (—) instead, or simply start a new sentence.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-18">
            <hr>
            <h2>File extensions</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
            </div>
            <!-- Bulleted List -->
            <div>
              <p>When referring generally to a file extension type, use all uppercase without a period. Add a lowercase s to make plural. When referring to a specific file, the filename should be preserved.</p>
              <ul>
                <li>GIF</li>
                <li>PDF</li>
                <li>HTML</li>
                <li>Slowclap.gif</li>
                <li>MCBenefits.pdf</li>
                <li>ben-twitter-Profile.jpg</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-19">
            <hr>
            <h2>Radio Buttons</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use sentence case for radio buttons. Ensure that the radio button as well as the label are clickable to facilitate the selection.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-20">
            <hr>
            <h2>Ranges and spans</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use a hyphen (-) to indicate a range or span of numbers.
            </div>
            <!-- Bulleted List -->
            <div>
              <p></p>
              <ul>
                <li>It takes 20-30 days.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-21">
            <hr>
            <h2>Slang and jargon</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Write in plain English. If you need to use a technical term, briefly define it so everyone can understand.
            </div>
            <!-- Bulleted List -->
            <div>
              <p></p>
              <ul>
                <li>SproutLoud's ops team is constantly scaling our servers to make sure our users have a great experience with our products. One way we do this is with shards, or partitions, that help us better horizontally scale our database infrastructure.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-22">
            <hr>
            <h2>Telephone numbers</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              When we display contact information for Marketing coordinator's, support, etc., we use the phone data from the Customer Services account. This format is open and will be displayed exactly as it is stored. During customization, the phone numbers can be formatted in whatever way the master account prefers, or as additional options for the member to choose from.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-23">
            <hr>
            <h2>Text formatting</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
            </div>
            <!-- Bulleted List -->
            <div>
              <p>Use italics when citing an example of an in-app SproutLoud element, or referencing button and navigation labels in step-by-step instructions</p>
              <ul>
                <li>When you are all done, click Send. (Send would be italicized)</li>
                <li>Don’t use underline formatting.</li>
                <li>Leave one space between sentences, never 2.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-24">
            <hr>
            <h2>Time</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Use numerals and am or pm, with a space in between.
            </div>
            <!-- Bulleted List -->
            <div>
              <p></p>
              <ul>
                <li>7 am</li>
                <li>7:30 pm</li>
                <li>Use a hyphen between times to indicate a time period. 7 am - 10:30 pm</li>
                <li>Display time in the client’s specified time zone (Exception: BI dashboards show the Master the data in the member timezone)</li>
                <li>When referring to time zones, spell them out: Nepal Standard Time, Australian Eastern Time. If a time zone does not have a set name, use its Coordinated Universal Time (UTC) offset.</li>
              </ul>
            </div>
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
        <div class="row">
          <!-- Block of information for each item -->
          <div class="col-12 mt-3" id="item-25">
            <hr>
            <h2>Tooltips</h2>
            <hr>
          </div>
          <div class="col-12 my-3">
            <div>
              Add the class dotted to a word to show there is an additional tooltip available.
            </div>
            <!-- Bulleted List -->
            <!-- / Bulleted List -->
          </div>
          <!-- / Block of information for each item -->
        </div>
      </div>
      <!-- / main container block -->
    </div>
  </dashboard>
</template>

<script>
import Dashboard from '@/components/dashboard/Dashboard.vue'

export default {
  components: {
    Dashboard
  },

  methods: {
    scrollIntoView (evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#nav-scroller {
  position: relative; 
  height: 100vh; 
  overflow-y: scroll;
}

.nav {
  .nav-item {
    .nav-link {
      padding: .2rem 1rem;
    }
  }
}
</style>