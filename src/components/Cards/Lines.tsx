import { ResponsiveLine } from '@nivo/line';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const MyResponsiveLine = ({ data /* see data tab */}: any) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

export default function Lines() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(211, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 98
              },
              {
                "x": "helicopter",
                "y": 25
              },
              {
                "x": "boat",
                "y": 84
              },
              {
                "x": "train",
                "y": 14
              },
              {
                "x": "subway",
                "y": 156
              },
              {
                "x": "bus",
                "y": 26
              },
              {
                "x": "car",
                "y": 204
              },
              {
                "x": "moto",
                "y": 80
              },
              {
                "x": "bicycle",
                "y": 30
              },
              {
                "x": "horse",
                "y": 41
              },
              {
                "x": "skateboard",
                "y": 242
              },
              {
                "x": "others",
                "y": 39
              }
            ]
          },
          {
            "id": "france",
            "color": "hsl(9, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 289
              },
              {
                "x": "helicopter",
                "y": 160
              },
              {
                "x": "boat",
                "y": 282
              },
              {
                "x": "train",
                "y": 115
              },
              {
                "x": "subway",
                "y": 89
              },
              {
                "x": "bus",
                "y": 72
              },
              {
                "x": "car",
                "y": 51
              },
              {
                "x": "moto",
                "y": 187
              },
              {
                "x": "bicycle",
                "y": 266
              },
              {
                "x": "horse",
                "y": 229
              },
              {
                "x": "skateboard",
                "y": 77
              },
              {
                "x": "others",
                "y": 97
              }
            ]
          },
          {
            "id": "us",
            "color": "hsl(224, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 281
              },
              {
                "x": "helicopter",
                "y": 170
              },
              {
                "x": "boat",
                "y": 113
              },
              {
                "x": "train",
                "y": 20
              },
              {
                "x": "subway",
                "y": 105
              },
              {
                "x": "bus",
                "y": 276
              },
              {
                "x": "car",
                "y": 251
              },
              {
                "x": "moto",
                "y": 162
              },
              {
                "x": "bicycle",
                "y": 76
              },
              {
                "x": "horse",
                "y": 38
              },
              {
                "x": "skateboard",
                "y": 0
              },
              {
                "x": "others",
                "y": 292
              }
            ]
          },
          {
            "id": "germany",
            "color": "hsl(286, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 284
              },
              {
                "x": "helicopter",
                "y": 57
              },
              {
                "x": "boat",
                "y": 88
              },
              {
                "x": "train",
                "y": 266
              },
              {
                "x": "subway",
                "y": 294
              },
              {
                "x": "bus",
                "y": 238
              },
              {
                "x": "car",
                "y": 223
              },
              {
                "x": "moto",
                "y": 244
              },
              {
                "x": "bicycle",
                "y": 265
              },
              {
                "x": "horse",
                "y": 31
              },
              {
                "x": "skateboard",
                "y": 266
              },
              {
                "x": "others",
                "y": 40
              }
            ]
          },
          {
            "id": "norway",
            "color": "hsl(106, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 112
              },
              {
                "x": "helicopter",
                "y": 201
              },
              {
                "x": "boat",
                "y": 295
              },
              {
                "x": "train",
                "y": 112
              },
              {
                "x": "subway",
                "y": 277
              },
              {
                "x": "bus",
                "y": 294
              },
              {
                "x": "car",
                "y": 205
              },
              {
                "x": "moto",
                "y": 58
              },
              {
                "x": "bicycle",
                "y": 271
              },
              {
                "x": "horse",
                "y": 252
              },
              {
                "x": "skateboard",
                "y": 0
              },
              {
                "x": "others",
                "y": 181
              }
            ]
          }
    ]; 

    return (
        <Card>
            <CardHeader>
                <CardTitle>Lines</CardTitle>
                <CardDescription>These are the state of this year</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 h-[400px]">
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    );
}
