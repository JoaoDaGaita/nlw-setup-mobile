import { ScrollView, View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'

import { BackButton } from '../components/BackButton'
import { ProgressBar } from '../components/ProgressBar'
import { CheckBox } from '../components/CheckBox'

interface Props {
  date: string
}

export function Habit() {
  const route = useRoute()
  const { date } = route.params as Props

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  return (
    <View className="flex-1 bg-black px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base last-of-type:">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={80} />

        <View className="mt-6">
          <CheckBox title="Beber 2L de água" />
          <CheckBox title="Caminhar" checked={true} />
        </View>
      </ScrollView>
    </View>
  )
}
