<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col-12 col-md-10 order-md-1 col-lg-10 offset-lg-1 py-5 pr-5" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">

          <!-- Title Container-->
          <div class="col-12 col-lg-10 titles-ct mt-0 pb-3">
            <h1>Common Translations</h1>
            <h2>These ARE the translations you are looking for, lol.</h2>
          </div>

          <!-- Page description text -->   
          <div class="col-12">
           <b-table
                :items="items"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                striped
              ></b-table>

              <div>
                Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
                <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sortBy: 'term',
        sortDesc: false,
        fields: [
          { key: 'type', sortable: true },
          { key: 'description', sortable: true },
          { key: 'translation', sortable: true },
          { key: 'namespace', sortable: true },
          { key: 'term', sortable: true }
        ],
        items: [
          { term: 'no_data_available', namespace: 'labels', translation: 'There is currently no data available.', description: 'There is no data on a grid with no filters applied.', type: 'Alert' },
          { term: 'no_results', namespace: 'infos.filters', translation: 'Your search has returned no results. Please modify your search and try again.', description: 'There are no results from a search or with filters applied.', type: 'Alert' },
          { term: 'retrieving_info', namespace: 'errors', translation: 'There was an error retrieving the information you requested. Please try again later.', description: 'When there is an error loading data.', type: 'Alert' },
          { term: 'info_unavailable', namespace: 'errors.reports', translation: 'The information you requested is not currently available. Please try again. If this problem persists, please contact your Marketing Assistant.', description: 'Currently being used on reports.', type: 'Alert' },
          { term: 'info_not_available', namespace: 'errors', translation: 'The information you requested is not currently available.', description: 'Used when is not possible to get the information, either for an error or because it is just not available', type: 'Alert' },
          { term: 'close', namespace: 'action', translation: 'Close', description: 'On a modal when no action needs to be taken.', type: 'Actions' }
        ]
      }
    }
  }
</script>