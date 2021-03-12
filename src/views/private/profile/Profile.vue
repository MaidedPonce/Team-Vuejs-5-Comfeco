  
<template>
  <Submenu :tabs="['Insignias', 'Perfil', 'Comunidades']" :selected="selected" @selected="setSelected" class="bg-purple-300">
      <Tab :isSelected="selected === 'Insignias'" class="design">
        <p>Some test</p>
      </Tab>
      <Tab :isSelected="selected === 'Perfil'" class="design">
        <h1>More test</h1>
      </Tab>
      <Tab :isSelected="selected === 'Comunidades'" class="design">
        <p>Holi uwu</p>
      </Tab>
    </Submenu>
</template>

<script>
import Submenu from '../../components/layouts/Submenu'
import Tab from '../../components/layouts/Tab'
export default {
    name: 'Perfil',
    component: {
        Submenu,
        Tab
    }
}
</script>

<style>
</style>