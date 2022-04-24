<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <form @submit.prevent="store()">
        <div class="card">
          <h5>Float Label</h5>
          <div class="col-12 mb-2 lg:col-12 lg:mb-0">
            <InputText
              type="text"
              placeholder="Default"
              v-model="kategori.nama_kategori"
            ></InputText>
            <div v-if="validation.nama_kategori" class="text-danger">
              {{ validation.nama_kategori[0] }}
            </div>
          </div>

          <h5>Textarea</h5>
          <!-- <div class="col-12 mb-2 lg:col-12 lg:mb-0"> -->
          <Textarea
            v-model="kategori.detail"
            placeholder="Your Message"
            :autoResize="true"
            rows="3"
            cols="30"
          />
          <div v-if="validation.detail" class="text-danger">
            {{ validation.detail[0] }}
          </div>
          <!-- </div> -->

          <div class="col-12 lg:col-3">
            <Button label="Submit" type="submit" class="mr-2 mb-2"></Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import apiKategori from '../../apis/Kategori';

export default {
  setup() {
    const kategori = reactive({
      nama_kategori: "",
      detail: "",
    });

    const validation = ref([]);
    const router = useRouter();
    function store() {
      apiKategori.tambahKategori(kategori)
        .then(() => {
          router.push({
            name: "lihat-kategori",
          });
        })
        .catch((err) => {
          validation.value = err.response.data.error;
        });
    }
    return {
      kategori,
      validation,
      router,
      store,
    };
  },
};
</script>