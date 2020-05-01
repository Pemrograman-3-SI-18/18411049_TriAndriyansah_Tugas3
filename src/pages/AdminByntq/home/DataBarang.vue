<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah data Barang" to="/AdminByntq/InputDataBarang"/>
          <q-btn color="red" :disable="loading" label="Hapus data Barang"  />
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Barang',
          align: 'left',
          field: row => row.kodeBarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaBarang', align: 'center', label: 'Nama Barang', field: 'namaBarang', sortable: true },
        { name: 'jenisBarang', align: 'center', label: 'Jenis Barang', field: 'jenisBarang', sortable: true },
        { name: 'hargaBarang', label: 'Harga Barang', align: 'center', field: 'hargaBarang' }
      ],
      data: [
        {
          kodeBarang: 'B001',
          namaBarang: 'Kaos Distro',
          jenisBarang: 'Kaos',
          hargaBarang: '100000'
        },
        {
          kodeBarang: 'G001',
          namaBarang: 'Gelang',
          jenisBarang: 'Gelang',
          hargaBarang: '50000'
        },
        {
          kodeBarang: 'S001',
          namaBarang: 'Sepatu',
          jenisBarang: 'Sepatu',
          hargaBarang: '700000'
        },
        {
          kodeBarang: 'K001',
          namaBarang: 'Kemeja',
          jenisBarang: 'Kemeja',
          hargaBarang: '200000'
        },
        {
          kodeBarang: 'C001',
          namaBarang: 'Celana Jeans',
          jenisBarang: 'Celana',
          hargaBarang: '200000'
        }

      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
