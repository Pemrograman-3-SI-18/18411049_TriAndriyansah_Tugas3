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
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'namaBarang', align: 'center', label: 'Nama Barang', field: 'namaBarang', sortable: true },
        { name: 'hargaBarang', label: 'Harga Barang', align: 'center', field: 'hargaBarang' },
        { name: 'jumlahBeli', label: 'Jumlah Beli', align: 'center', field: 'jumlahBeli' },
        { name: 'total', label: 'Total', align: 'center', field: 'total' }
      ],
      data: [
        {
          kodeTransaksi: 'T0001',
          namaPembeli: 'Lestari',
          namaBarang: ' Kaos Distro',
          hargaBarang: '100000',
          jumlahBeli: '2',
          total: '200000'
        },
        {
          kodeTransaksi: 'T0001',
          namaPembeli: 'Ikbal',
          namaBarang: ' Sepatu',
          hargaBarang: '700000',
          jumlahBeli: '2',
          total: '1400000'
        },
        {
          kodeTransaksi: 'T0002',
          namaPembeli: 'Trian',
          namaBarang: ' Celana Jeans',
          hargaBarang: '200000',
          jumlahBeli: '1',
          total: '200000'
        },
        {
          kodeTransaksi: 'T0003',
          namaPembeli: 'Kevin',
          namaBarang: ' Gelang',
          hargaBarang: '50000',
          jumlahBeli: '2',
          total: '100000'
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
