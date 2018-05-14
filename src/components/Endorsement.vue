<template>
      <div class="endorsement-text">
        <p class="text">"{{quote.text}}"</p>
        <div class="from">
            <p>-{{quote.from}},</p>
            <p>{{quote.company}}</p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Endorsement',
  props: ['quote']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../globals.scss";
.endorsement-text{
    display: inline-block;
    padding-top: 30px;
    padding-bottom: 10px;
    max-width: 60%;
    min-width: 300px;
    color: $off-white;
    @media (max-width: $tablet-break){
        max-width: 100%;
        margin: 0 20px;
    }
    .text{
        margin-top: 0;
        text-align: justify;
    }
    .from{
        p{
            margin: 0;
        }
        text-align: right;
    }
}
</style>
