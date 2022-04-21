<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>Float Label</h5>
        <div class="col-12 mb-2 lg:col-12 lg:mb-0">
          <InputText type="text" placeholder="Default"></InputText>
        </div>

        <h5>Textarea</h5>
            <Textarea
            placeholder="Your Message"
            :autoResize="true"
            rows="3"
            cols="30"
            />
            
        <div class="col-12 lg:col-3">
            <Button label="Submit" class="mr-2 mb-2"></Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>