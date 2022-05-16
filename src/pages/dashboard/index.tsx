import { Box, Button, Flex, Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { theme } from "../../styles/theme";
import { RiArrowLeftRightLine, RiFilter2Line, RiRefund2Line, RiShoppingCart2Line, RiUser3Line } from "react-icons/ri";
import { StatsBoard } from "../../components/Dashboard/StatsBoard";
import { DashboardLayout } from "../../components/Layout";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2021-05-01T00:00:00.000Z',
            '2021-05-02T00:00:00.000Z',
            '2021-05-03T00:00:00.000Z',
            '2021-05-04T00:00:00.000Z',
            '2021-05-05T00:00:00.000Z',
            '2021-05-06T00:00:00.000Z',
            '2021-05-07T00:00:00.000Z'
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
}

const series = [
    {
        name: "series1", data: [31, 120, 10, 52, 13, 90, 200]
    }
]

export default function DashBoard() {
    return (
        <DashboardLayout>
           
            <Flex align="center" justify="space-between" pb="8" flexDirection={['column', 'row']}>
                <Heading>
                    Indicadores
                </Heading>

                <Flex align="center">
                    <HStack spacing="8">
                        <Text>
                            Período: Últimos 12 meses
                        </Text>
                        <Button borderRadius={50} leftIcon={<Icon as={RiFilter2Line} color="primary.normal" />} variant="solid" bgColor="white" color="black" colorScheme='white'>Button</Button>
                    </HStack>
                </Flex>
            </Flex>

            <SimpleGrid columns={[1, 2, 3, 4]} gap="4" alignItems="flex-start" mb="8">
                <StatsBoard color="blue" label="Vendas" title="245" subtitle="11,25" icon={RiShoppingCart2Line} />
                <StatsBoard color="green" label="Faturamento" title="R$ 12.164,00" subtitle="11,25" icon={RiRefund2Line} />
                <StatsBoard color="yellow" label="Conversão" title="12%" subtitle="11,25" icon={RiArrowLeftRightLine} />
                <StatsBoard color="purple" label="Leads" title="432" subtitle="11,25" icon={RiUser3Line} />
            </SimpleGrid>
            
            <Box 
                p="8"
                bg="white"
                borderRadius={30}
                pb="4"
                boxShadow="xl"
            >
                <Text fontSize="lg" mb="4">
                    Inscritos da semana
                </Text>
                <Chart options={options} type="area" height="600" series={series} />
            </Box>

        </DashboardLayout>
    )
}