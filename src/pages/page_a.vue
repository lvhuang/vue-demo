<template>
  <div>
    <div class="contanier-header">
      <div class="btn">
        <a-button type="primary" icon="upload" style="margin: 0px 3px;">Upload</a-button>
        <a-button type="primary" icon="delete" style="margin: 0px 3px;">Delete</a-button>
      </div>
      <div class="selbtn">
        <p>Year</p>
        <a-select
          showSearch
          placeholder="Select a Year"
          optionFilterProp="children"
          style="width: 200px"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :filterOption="filterOption"
        >
          <a-select-option value="2019">2019</a-select-option>
          <a-select-option value="2018">2018</a-select-option>
          <a-select-option value="2017">2017</a-select-option>
          <a-select-option value="2016">2016</a-select-option>
          <a-select-option value="2015">2015</a-select-option>
          <a-select-option value="2014">2014</a-select-option>
        </a-select>
        <p>Status</p>
        <a-select
          showSearch
          placeholder="Select a Status"
          optionFilterProp="children"
          style="width: 200px"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :filterOption="filterOption"
        >
          <a-select-option value="Ready">Ready</a-select-option>
          <a-select-option value="Executing">Executing</a-select-option>
          <a-select-option value="Finished">Finished</a-select-option>
        </a-select>
        <p>Name</p>
        <a-input class="components-input-demo-size" placeholder="Name"/>
        <a-button type="primary" icon="search">Search</a-button>
      </div>
    </div>
    <div class="table">
      <a-table
        :columns="columns"
        :rowKey="record => record.login.uuid"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
      </a-table>
    </div>
  </div>
</template>

<script>
import reqwest from "reqwest";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    fetch(params = {}) {
      console.log("params:", params);
      this.loading = true;
      reqwest({
        url: "https://randomuser.me/api",
        method: "get",
        data: {
          results: 10,
          ...params
        },
        type: "json"
      }).then(data => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>
<style scoped>
.components-input-demo-size {
  width: 200px;
  margin: 0 3px 3px 0;
}
.contanier-header,
.selbtn {
  display: flex;
}
p {
  margin: 0 3px;
  padding: 3px;
  font-size: 14px;
}
</style>
